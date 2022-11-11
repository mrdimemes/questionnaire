import { useContext } from "react";
import classNames from "classnames";

import { Field as FieldModel } from "src/models";
import { Button, Removeable } from "src/components";
import { withTheme } from "src/HOCs";

import { CriticalContext } from "../../../../../../../../contexts";

import { Field } from "./subcomponents";
import styles from "./FieldsEditor.module.sass";

import type { FieldsEditorProps } from "./types";


const FieldsEditor = ({ className, fields, setFields }: FieldsEditorProps) => {

  const critical = useContext(CriticalContext);
  const maxFields =
    Number(process.env.REACT_APP_MAX_FIELDS_PER_QUESTION ?? "10");
  const minFields = 1;

  const updateField = (value: string, index: number) => {
    const fieldsCopy = [...fields];
    fieldsCopy[index].text = value;
    setFields(fieldsCopy);
  };

  const addField = () => {
    critical();
    setFields([...fields, new FieldModel(0, "Новый вариант")]);
  };

  const removeField = (index: number) => {
    critical();
    const fieldsCopy = [] as FieldModel[];
    fields.forEach((field, idx) => {
      if (idx !== index) fieldsCopy.push(field);
    });
    setFields(fieldsCopy);
  };

  return (
    <div className={classNames(styles.FieldsEditor, className)}>
      <h3 className={styles.header}>Варианты ответов</h3>

      {
        fields.map((field, index) => {
          return (
            <Removeable
              key={index}
              className={styles.field}
              remove={() => removeField(index)}
              removeCondition={fields.length > minFields}
            >
              <Field
                field={field}
                update={(value: string) => updateField(value, index)}
              />
            </Removeable>
          );
        })
      }

      {
        fields.length < maxFields &&
        <Button
          className={styles.addFieldButton}
          onClick={addField}
        />
      }
    </div>
  );
};

export default withTheme(FieldsEditor, styles);