function takeANumber (currentLine, newName) {
  currentLine.push(newName)
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
}
return `Currently serving ${katzDeliLine.shift()}.`
}


function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "The line is currently empty."
  }
  
  let welcomeMessage = "The line is currently: ";
  
  for (let i = 0; i < katzDeliLine.length; i += 1) {
      welcomeMessage += `${i + 1}. ${katzDeliLine[i]}${i < katzDeliLine.length - 1 ? ", " : "" }`
  }
  return welcomeMessage;
}