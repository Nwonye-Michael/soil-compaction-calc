document.getElementById("run").addEventListener("click", function () {
  // Get values from input fields
  let WEIGHT_OF_MOULD = parseFloat(
    document.getElementById("WEIGHT_OF_MOULD").value
  )
  let WT_OF_CAN = parseFloat(document.getElementById("WT_OF_CAN").value)
  let targetDD = parseFloat(document.getElementById("targetDD").value)
  let targetMC = parseFloat(document.getElementById("targetMC").value)

  // Function to calculate the weights based on target dry density and moisture content
  function calculateWeights(targetDD, targetMC) {
    // Calculate the total weight of the mould + soil
    let weightMouldSoil =
      (targetDD * 926.77 * (1 + targetMC / 100)) / 1000 + WEIGHT_OF_MOULD

    // Calculate the weight of dry soil
    let weightOfDrySoil = WT_OF_CAN + 8 + Math.random() * 6

    // Calculate the weight of water
    let weightOfWater = (targetMC / 100) * weightOfDrySoil

    // Calculate the weight of wet soil (including the can)
    let weightOfCanWetSoil = WT_OF_CAN + weightOfDrySoil + weightOfWater

    // Calculate the weight of dry soil (including the can)
    let weightOfCanDrySoil = WT_OF_CAN + weightOfDrySoil

    return {
      weightMouldSoil: weightMouldSoil.toFixed(2),
      weightOfCanWetSoil: weightOfCanWetSoil.toFixed(2),
      weightOfCanDrySoil: weightOfCanDrySoil.toFixed(2),
      weightOfWater: weightOfWater.toFixed(2),
    }
  }

  // Run the calculation
  const result = calculateWeights(targetDD, targetMC)

  // Display the result in the result div
  let resultDiv = document.getElementById("result")
  resultDiv.innerHTML = `
    <p>Weight of Mould + Soil (KGMS): ${result.weightMouldSoil}</p>
    <p>Weight of Can + Wet Soil (GMS): ${result.weightOfCanWetSoil}</p>
    <p>Weight of Can + Dry Soil (GMS): ${result.weightOfCanDrySoil}</p>
    <p>Weight of Water (GMS): ${result.weightOfWater}</p>
  `
})
