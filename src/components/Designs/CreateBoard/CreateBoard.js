import React, { Component } from "react";
import styled from "styled-components";
import { Button, Icon } from "semantic-ui-react";
import { FormInput } from "components/Commons/FormItems";
import { ValidationGroup } from "modules/FormControl";

const Board = styled.li`
  padding: 5px;
  width: 250px;
  float: left;
  box-sizing: border-box;
  background-color: #dbdada;
  border-radius: 3px;
  button {
    margin: 0 !important;
    margin-left: 1% !important;
    line-height: 1.21428571em !important;
    padding: 0.67857143em 1em !important;
    border: 1px solid #e0e1e2 !important;
  }
  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: 600;
  padding: 0.67857143em 1em;
  cursor: pointer;
`;

const ButtonWrap = styled.div`
  margin-top: 1rem;
`;

const CloseBtn = styled(Button)`
  background-color: transparent !important;
  border: 0 !important;
  padding: 10px !important;
  margin-left: 10px !important;
`;

const FInput = styled.div`
  & > div {
    margin-bottom: 1.5rem;
  }
`;

class CreateBoard extends Component {
  state = {
    active: false
  };

  onChangeValue = async data => {
    let obj = {};
    if (data.target) {
      obj[data.target.name] = data;
    }
    await this.setState(obj);
    console.log(this.state);
  };

  formActive = async () => {
    await this.setState({ active: true });
    setTimeout(() => {
      this.state.title.target.focus();
    }, 100);
  };

  handleSubmit = async e => {
    e.preventDefault();
    let data = { ...this.state };
    console.log("??????", data);
    data.title.order = this.props.order;
    await ValidationGroup(data, true)
      .then(data => {
        this.props
          .CreateDesignBoardRequest(data, this.props.designId, this.props.token)
          .then(data => {
            this.props.GetDesignBoardRequest(this.props.designId);
          });
        this.setState({ active: false });
      })
      .catch(console.log("실패"));
  };
  handelClose = (e) => {
    if(e.type === "blur" && !this.form.contains(
      e.relatedTarget
    )){
      this.setState({ active: false });
    } else if(e.type === "click") {
      this.setState({ active: false });
    }
  };
  render() {
    return (
      <Board>
        {this.state.active ? (
          <form onSubmit={this.handleSubmit} ref={ref => (this.form = ref)} tabIndex="1" onBlur={this.handelClose}>
            <FInput>
              <FormInput
                name="title"
                placeholder="새 단계 추가"
                getValue={this.onChangeValue}
                validates={["Required"]}
              />
            </FInput>

            <ButtonWrap>
              <Button type="submit">생성</Button>
              <CloseBtn type="button" onClick={this.handelClose}>
                <Icon name="close" />
              </CloseBtn>
            </ButtonWrap>
          </form>
        ) : (
          <Title onClick={this.formActive}>새 단계 추가 +</Title>
        )}
      </Board>
    );
  }
}

export default CreateBoard;
