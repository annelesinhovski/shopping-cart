import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UserContext } from "@exercito/stores";
import { Page } from "./Page";

jest.mock("@exercito/utils");

const wrapper = (props) =>
  render(
    <UserContext.Provider
      value={{
        state: {
          sessionId: "fake-session-id",
        },
      }}
    >
      <Page {...props}>Teste</Page>
    </UserContext.Provider>
  );

test("Matches snapshot", () => {
  const { asFragment } = wrapper({ title: "Exemplo de titulo" });

  expect(asFragment()).toMatchSnapshot();
});
