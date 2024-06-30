const calculate = () => {
  const M1 = document.getElementsByClassName("M1Input")[0].value
  const M2 = document.getElementsByClassName("M2Input")[0].value
  const M3 = document.getElementsByClassName("M3Input")[0].value
  console.log(M1, M2, M3)
  const waterContentResult =
    document.getElementsByClassName("waterContentAnswer")[0]
  const emptyMould = parseFloat(
    document.getElementsByClassName("emptyMould")[0].value
  )
  const compactedMould = parseFloat(
    document.getElementsByClassName("compactedMould")[0].value
  )

  const mddAnswer = document.getElementsByClassName("mddAnswer")[0]

  const waterContent = (M2 - M3) / (M3 - M1)
  waterContentResult.textContent = `${(waterContent * 100).toFixed(2)}% ` // Displaying water content with two decimal places

  // Calculate MDD and display it
  const mdd =
    ((compactedMould - emptyMould) * 1000) / (926.77 * (1 + waterContent))
  mddAnswer.textContent = `${mdd.toFixed(2)}`
}

const calculateMdOnly = () => {
  const waterContentResult = parseFloat(
    document.getElementsByClassName("givenWC")[0].value
  )
  const emptyMould = parseFloat(
    document.getElementsByClassName("emptyMould")[0].value
  )
  const compactedMould = parseFloat(
    document.getElementsByClassName("compactedMould")[0].value
  )

  const mddAnswer = document.getElementsByClassName("mddAnswer")[0]

  console.log(waterContentResult, emptyMould, compactedMould, volumeOfMould)
  const mdd =
    ((compactedMould - emptyMould) * 1000) / (926.77 * (1 + waterContentResult))
  mddAnswer.textContent = `${mdd.toFixed(2)}`
}

const button = document.getElementById("compelteValuesButton")
button.addEventListener("click", calculate)
const givenButton = document.getElementById("justMD")
givenButton.addEventListener("click", calculateMdOnly)
