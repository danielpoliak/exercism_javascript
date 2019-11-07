/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const regExpValidations = {
  isQuestion: message => message.trim().endsWith('?'),
  isYelling: message => RegExp(/^(?=.*[A-Z])[A-Z0-9\W-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]+$/).test(message),
  isRetort: message => RegExp(/^[A-Z" "]+[?]$/).test(message),
  isSayingNothing: message => RegExp(/^\s*$/).test(message)
}

export const hey = (message) => {
  if(regExpValidations.isRetort(message)){
    return "Calm down, I know what I\'m doing!"
  } else if(regExpValidations.isSayingNothing(message)) {
    return "Fine. Be that way!"
  } else if(regExpValidations.isQuestion(message)){
    return 'Sure.'
  } else if (regExpValidations.isYelling(message)){
    return "Whoa, chill out!"
  }else return 'Whatever.'
};
