import React from 'react';
import { Input } from 'semantic-ui-react';

const InputExampleLabeled = props =>
  <Input onChange={props.onChange} label="Amount" value={props.value} fluid type="number" />;

export default InputExampleLabeled;
