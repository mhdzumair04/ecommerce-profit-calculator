// Platform fee presets

const platformFees = {

    custom: 5,

    amazon: 15,

    shopify: 2,

    etsy: 6.5,

    ebay: 13.6

};


// Update platform fee

function updatePlatformFee() {

    const platform =
        document.getElementById("platform").value;


    const fee =
        platformFees[platform];


    document.getElementById("platformFee").value =
        fee;


    calculateProfit();
}


// Calculate profit

function calculateProfit() {

    const currency =
        document.getElementById("currency").value;


    const productCost =
        Number(
            document.getElementById("productCost").value
        ) || 0;


    const sellingPrice =
        Number(
            document.getElementById("sellingPrice").value
        ) || 0;


    const shippingCost =
        Number(
            document.getElementById("shippingCost").value
        ) || 0;


    const platformFeePercent =
        Number(
            document.getElementById("platformFee").value
        ) || 0;


    const advertisingCost =
        Number(
            document.getElementById("advertisingCost").value
        ) || 0;


    // Platform fee

    const platformFee =
        sellingPrice *
        (platformFeePercent / 100);


    // Total costs

    const totalCosts =
        productCost +
        shippingCost +
        platformFee +
        advertisingCost;


    // Profit

    const profit =
        sellingPrice - totalCosts;


    // Profit margin

    const margin =
        sellingPrice > 0
            ? (profit / sellingPrice) * 100
            : 0;


    // Break-even

    const fixedCosts =
        productCost +
        shippingCost +
        advertisingCost;


    const feeRate =
        platformFeePercent / 100;


    let breakEven = 0;


    if (feeRate < 1) {

        breakEven =
            fixedCosts / (1 - feeRate);

    }


    // ROAS

    const roas =
        advertisingCost > 0
            ? sellingPrice / advertisingCost
            : 0;


    // Display results

    document.getElementById("totalCosts").textContent =
        currency + totalCosts.toFixed(2);


    document.getElementById("profit").textContent =
        currency + profit.toFixed(2);


    document.getElementById("margin").textContent =
        margin.toFixed(2) + "%";


    document.getElementById("breakEven").textContent =
        currency + breakEven.toFixed(2);


    document.getElementById("roas").textContent =
        roas.toFixed(2) + "x";


    // Profit status

    const status =
        document.getElementById("profitStatus");


    if (sellingPrice === 0) {

        status.textContent =
            "Enter your numbers and calculate your profit.";

        status.className =
            "profit-status neutral";

    }

    else if (profit > 0) {

        status.textContent =
            "✓ Your product is profitable";

        status.className =
            "profit-status positive";

    }

    else if (profit < 0) {

        status.textContent =
            "⚠ Your product is currently losing money";

        status.className =
            "profit-status negative";

    }

    else {

        status.textContent =
            "Your product is breaking even";

        status.className =
            "profit-status neutral";

    }

}


// Reset calculator

function resetCalculator() {

    document.getElementById("currency").value =
        "$";


    document.getElementById("platform").value =
        "custom";


    document.getElementById("productCost").value =
        "";


    document.getElementById("sellingPrice").value =
        "";


    document.getElementById("shippingCost").value =
        "";


    document.getElementById("platformFee").value =
        "5";


    document.getElementById("advertisingCost").value =
        "";


    document.getElementById("totalCosts").textContent =
        "$0.00";


    document.getElementById("profit").textContent =
        "$0.00";


    document.getElementById("margin").textContent =
        "0%";


    document.getElementById("breakEven").textContent =
        "$0.00";


    document.getElementById("roas").textContent =
        "0x";


    const status =
        document.getElementById("profitStatus");


    status.textContent =
        "Enter your numbers and calculate your profit.";


    status.className =
        "profit-status neutral";

}