import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupStore, AppStore, RootState } from "src/redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderWithRouters(
  ui: React.ReactElement,
  { ...renderOptions }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export function renderWithProvidersAndRouters(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}