import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { PasswordStrengthCheck } from '../PasswordStrengthCheck';
import {
  shouldIncludeDigits,
  shouldIncludeSpecialCharacter,
  shouldIncludeLowerCaseCharacter,
  shouldIncludeUpperCaseCharacter,
  shouldBeAtLeastEightCharactersLong
} from '../../../helpers';

const PasswordStrengthVisualizer = ({ value, setIsPasswordValid }) => {
  const [passwordStrength, setPasswordStrength] = useState({
    shouldIncludeDigits: false,
    shouldIncludeLowerCaseCharacter: false,
    shouldIncludeUpperCaseCharacter: false,
    shouldIncludeSpecialCharacter: false,
    shouldBeAtLeastEightCharactersLong: false,
  });

  useEffect(() => {
    const isPasswordValid = Object.values(passwordStrength).every(check => check);
    setIsPasswordValid(isPasswordValid);
  }, [value, passwordStrength]);

  return (
    <Box>
      <PasswordStrengthCheck
        value={value}
        regexp={shouldIncludeDigits}
        passwordStrength={passwordStrength}
        setPasswordStrength={setPasswordStrength}
        ruleTitle="shouldIncludeDigits"
        title="Should contain at least one digit."
      />
      <PasswordStrengthCheck
        value={value}
        regexp={shouldIncludeLowerCaseCharacter}
        passwordStrength={passwordStrength}
        setPasswordStrength={setPasswordStrength}
        ruleTitle="shouldIncludeLowerCaseCharacter"
        title="Should contain at least one lower case letter."
      />
      <PasswordStrengthCheck
        value={value}
        regexp={shouldIncludeUpperCaseCharacter}
        passwordStrength={passwordStrength}
        setPasswordStrength={setPasswordStrength}
        ruleTitle="shouldIncludeUpperCaseCharacter"
        title="Should contain at least one upper case letter."
      />
      <PasswordStrengthCheck
        value={value}
        regexp={shouldIncludeSpecialCharacter}
        passwordStrength={passwordStrength}
        setPasswordStrength={setPasswordStrength}
        ruleTitle="shouldIncludeSpecialCharacter"
        title="Should contain at least one special character."
      />
      <PasswordStrengthCheck
        value={value}
        regexp={shouldBeAtLeastEightCharactersLong}
        passwordStrength={passwordStrength}
        setPasswordStrength={setPasswordStrength}
        ruleTitle="shouldBeAtLeastEightCharactersLong"
        title="Should be at least 8 characters long."
      />
    </Box>
  );
}

export { PasswordStrengthVisualizer };
