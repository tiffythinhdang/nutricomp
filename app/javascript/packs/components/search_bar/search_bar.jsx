import React from 'react';
import styled from 'styled-components';

import Button from '../buttons/button';
import NutritionixKey from '../../../../../nutriontionix_api_key/key';

const Input = styled.input`
  font-family: Varela Round;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #B5B5B5;

  background: #FFFFFF;
  height: 54px;
  border: 1px solid #B5B5B5;
  box-sizing: border-box;
  border-radius: 25px 30px 30px 0px;
  padding: 0px 10px;
`;

function searchFood(food) {
  return fetch(
    'https://trackapi.nutritionix.com/v2/natural/nutrients',
    {
      method: 'POST',
      mode: 'cors',

      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '059d48dc',
        'x-app-key': '688f2458d720abe362f55c45fb724d3d',
        'x-remote-user-id': '0'
      },

      body: JSON.stringify({
        'query': food,
        'num_servings': 1
      })
    }
  );
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      food: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(type) {
    return (e) => this.setState({ [type]: e.target.value });
  }

  async handleClick(e) {
    e.preventDefault;
    try {
      const response = await searchFood(this.state.food);
      const json = await response.json();

      if (response.status !== 200) {
        console.log(json.message);
        return;
      }

      const food = json["foods"][0];
      console.log(food);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <Input onChange={this.handleChange("food")}/>
        <Button
          primary
          onClick={this.handleClick}
        >Search</Button>
      </div>
    )
  }
};

export default SearchBar;
