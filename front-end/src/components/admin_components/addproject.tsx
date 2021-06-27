
import styled from "styled-components";

export const StyledForm = styled.form`
z-index: 10;
display: grid;
grid-template-columns: 50% 50%;
grid-template-rows: 25% 25% 25% 25%;
gap: 40px;
margin-right: 10%;
`;

export function AddProject() {

    return (
        <>
          <StyledForm>
              <p>here</p>
          </StyledForm>
        </>
    )
}