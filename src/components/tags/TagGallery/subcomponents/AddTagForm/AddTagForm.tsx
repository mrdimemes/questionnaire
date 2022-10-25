import { useState } from "react";

import { Button, TextInput } from "src/components";
import { QuestionnaireService } from "src/services";
import { FetchError } from "src/api/exceptions";
import { addTag } from "src/redux/slices/tagsSlice";
import { useAppDispatch } from "src/redux/hooks";
import { validateAddTagForm, ValidationError } from "src/utils/validation";

import styles from "./AddTagForm.module.sass";


const AddTagForm = () => {
  const dispatch = useAppDispatch();

  const [tagLabel, setTagLabel] = useState("");

  const handleSumbit = () => {
    try {
      validateAddTagForm(tagLabel);
      QuestionnaireService.addTag(tagLabel)
        .then(tagId => {
          dispatch(addTag({ id: tagId, label: tagLabel, frequency: 0 }));
          setTagLabel("");
        });
    } catch (error) {
      if (error instanceof ValidationError) {
        window.alert(error.message + " " + error.warnings[0].message);
      } else if (error instanceof FetchError) {
        return; // not implemented
      } else {
        throw error;
      };
    };
  };

  return (
    <form className={styles.AddTagForm}>
      <TextInput
        className={styles.input}
        name="tagLabel"
        value={tagLabel}
        onChange={setTagLabel}
      />
      <Button onClick={handleSumbit}>Добавить</Button>
    </form>
  );
};

export default AddTagForm;