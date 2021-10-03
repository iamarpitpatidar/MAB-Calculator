window.onload = function () {
    if (document.getElementById('PageConfigurationMaster_RXACBSW__1:PgHeading.Ra1.C2') !== null) initiateCalculator()
    else console.log("Its probably not the statement page.")
}

function initiateCalculator() {
    appendMABText()

    setInterval(() => {
        appendMABText()
        // setMABDateRange()
        calculateMAB()
    }, 3000)
}

function appendMABText() {
    const headingSelector = document.getElementById('PageConfigurationMaster_RXACBSW__1:Details_TopLeftContainer_Stage33.Ra1')

    if (checkStatement()) {
        if (document.getElementById('RBL_MAB_Selector') === null) {
            const child = document.createElement('div')
            child.setAttribute('id', 'RBL_MAB_Selector')
            child.style.cssText= 'line-height:2.2;font-size:16px;color:darkslategray;';
            child.append('Monthly Average Balance: 0')
            headingSelector.appendChild(child)
        }
    }
}

// function setMABDateRange() {
//     const date = new Date()
//     const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toLocaleDateString()
//     document.getElementById('PageConfigurationMaster_RXACBSW__1:TransactionHistoryFG.FROM_TXN_DATE').value = firstDay
// }

function calculateMAB() {

}

function checkStatement() {
    return !!document.getElementById('PageConfigurationMaster_RXACBSW__1:HREF_TransactionHistoryFG.ACC_BALANCE_ARRAY[0]')
}
