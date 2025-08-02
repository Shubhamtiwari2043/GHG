// Activity-Based Data 
    const data = [
  { scope: "Scope 1", category: "N/A", activity: "Diesel", unit: "liters", factor: 0.00268 },
  { scope: "Scope 1", category: "N/A", activity: "Petrol", unit: "liters", factor: 0.00231 },
  { scope: "Scope 1", category: "N/A", activity: "Natural Gas", unit: "scm", factor: 0.0019 },
  { scope: "Scope 1", category: "N/A", activity: "LPG", unit: "kg", factor: 0.0021 },
  { scope: "Scope 2", category: "N/A", activity: "Electricity (India)", unit: "kWh", factor: 0.00082 },
  { scope: "Scope 2", category: "N/A", activity: "Electricity (US)", unit: "kWh", factor: 0.00045 },
  { scope: "Scope 2", category: "N/A", activity: "Steam Purchased", unit: "kg", factor: 0.0007 },
  { scope: "Scope 2", category: "N/A", activity: "Chilled Water", unit: "kg", factor: 0.0005 },
  { scope: "Scope 3", category: "Purchased Goods and Services", activity: "Plastic packaging", unit: "kg", factor: 0.0018 },
  { scope: "Scope 3", category: "Purchased Goods and Services", activity: "Paper supply", unit: "kg", factor: 0.0012 },
  { scope: "Scope 3", category: "Capital Goods", activity: "Industrial machinery", unit: "kg", factor: 0.0025 },
  { scope: "Scope 3", category: "Capital Goods", activity: "Office furniture", unit: "kg", factor: 0.0019 },
  { scope: "Scope 3", category: "Fuel- and Energy-Related Activities", activity: "Transmission losses", unit: "kWh", factor: 0.0003 },
  { scope: "Scope 3", category: "Fuel- and Energy-Related Activities", activity: "Fuel extraction and production", unit: "liters", factor: 0.0008 },
  { scope: "Scope 3", category: "Upstream Transportation and Distribution", activity: "Air freight", unit: "ton-km", factor: 0.0006 },
  { scope: "Scope 3", category: "Upstream Transportation and Distribution", activity: "Truck transport", unit: "ton-km", factor: 0.0005 },
  { scope: "Scope 3", category: "Waste Generated in Operations", activity: "General waste", unit: "kg", factor: 0.0009 },
  { scope: "Scope 3", category: "Waste Generated in Operations", activity: "E-waste", unit: "kg", factor: 0.0016 },
  { scope: "Scope 3", category: "Business Travel", activity: "Flights", unit: "passenger-km", factor: 0.00015 },
  { scope: "Scope 3", category: "Business Travel", activity: "Hotel stay", unit: "night", factor: 0.0004 },
  { scope: "Scope 3", category: "Employee Commuting", activity: "Bus", unit: "passenger-km", factor: 0.00009 },
  { scope: "Scope 3", category: "Employee Commuting", activity: "Car", unit: "passenger-km", factor: 0.00022 },
  { scope: "Scope 3", category: "Upstream Leased Assets", activity: "Rented warehouse", unit: "sq ft", factor: 0.0011 },
  { scope: "Scope 3", category: "Upstream Leased Assets", activity: "Leased office space", unit: "sq ft", factor: 0.0013 },
  { scope: "Scope 3", category: "Downstream Transportation and Distribution", activity: "Marine shipping", unit: "ton-km", factor: 0.0004 },
  { scope: "Scope 3", category: "Downstream Transportation and Distribution", activity: "Rail transport", unit: "ton-km", factor: 0.0003 },
  { scope: "Scope 3", category: "Processing of Sold Products", activity: "Chemical treatment", unit: "kg", factor: 0.0023 },
  { scope: "Scope 3", category: "Processing of Sold Products", activity: "Assembly operations", unit: "kg", factor: 0.0017 },
  { scope: "Scope 3", category: "Use of Sold Products", activity: "Consumer electronics use", unit: "kWh", factor: 0.00095 },
  { scope: "Scope 3", category: "Use of Sold Products", activity: "Electric vehicle charging", unit: "kWh", factor: 0.00088 },
  { scope: "Scope 3", category: "End-of-Life Treatment of Sold Products", activity: "Landfilling", unit: "kg", factor: 0.0013 },
  { scope: "Scope 3", category: "End-of-Life Treatment of Sold Products", activity: "Recycling", unit: "kg", factor: 0.0009 },
  { scope: "Scope 3", category: "Downstream Leased Assets", activity: "Leased equipment", unit: "sq ft", factor: 0.001 },
  { scope: "Scope 3", category: "Downstream Leased Assets", activity: "Leased vehicles", unit: "km", factor: 0.0022 },
  { scope: "Scope 3", category: "Franchises", activity: "Franchise electricity use", unit: "kWh", factor: 0.00085 },
  { scope: "Scope 3", category: "Franchises", activity: "Franchise waste", unit: "kg", factor: 0.001 },
  { scope: "Scope 3", category: "Investments", activity: "Equity investments", unit: "USD", factor: 0.0042 },
  { scope: "Scope 3", category: "Investments", activity: "Debt investments", unit: "USD", factor: 0.0038 }
];

    // Activity-Based calculation
    const datalist = document.getElementById('activities');
    data.forEach(item => {
      const option = document.createElement('option');
      option.value = item.activity;
      datalist.appendChild(option);
    });

    function fillDetails() {
      const activity = document.getElementById('activity').value;
      const match = data.find(item => item.activity === activity);
      if (match) {
        document.getElementById('scope').value = match.scope;
        document.getElementById('category').value = match.category;
        document.getElementById('unit').value = match.unit;
        document.getElementById('emission').value = match.factor;
      } else {
        document.getElementById('unit').value = '';
        document.getElementById('emission').value = '';
      }
    }

    function calculateEmission() {
      const activity = document.getElementById('activity').value;
      const unit = document.getElementById('unit').value;
      const emissionFactor = parseFloat(document.getElementById('emission').value);
      const quantity = parseFloat(document.getElementById('quantity').value);

      if (!activity || isNaN(emissionFactor) || isNaN(quantity)) {
        document.getElementById('activityResult').innerText = 'Please select a valid activity and enter quantity.';
        return;
      }

      const totalEmission = emissionFactor * quantity;
      document.getElementById('activityResult').innerText =
        `Total Emissions for ${quantity} ${unit} of ${activity}: ${totalEmission.toFixed(4)} kg CO₂e`;
    }

    // GHG calculator
    function calculateGHG() {
      const electricity = parseFloat(document.getElementById('electricity').value) || 0;
      const fuel = parseFloat(document.getElementById('fuel').value) || 0;
      const car = parseFloat(document.getElementById('car').value) || 0;

      const efElectricity = 0.82;
      const efFuel = 2.31;
      const efCar = 0.21;

      const emissions = (electricity * efElectricity) + (fuel * efFuel) + (car * efCar);
      document.getElementById('result').innerText = `Total CO₂e Emissions: ${emissions.toFixed(2)} kg CO₂e`;
    }
  



