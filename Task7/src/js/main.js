'use strict';




let buttonId = document.getElementById('start'),
budgetValue = document.getElementsByClassName('budget-value'),
daybudgetValue = document.getElementsByClassName('daybudget-value'),
levelValue = document.getElementsByClassName('level-value'),
expensesValue = document.getElementsByClassName('expenses-value'),
optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
incomeValue = document.getElementsByClassName('income-value'),
monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
yearsavingsValue = document.getElementsByClassName('yearsavings-value'),

expensesItem = document.getElementsByClassName('expenses-item'),
expensesItemBtn = document.getElementsByTagName('button'),

optionalexpensesItem = document.querySelectorAll('optionalexpenses-item'),

chooseIncomeLabel = document.querySelectorAll('choose-income-label'),
checksavings = document.querySelectorAll('checksavings'),
chooseSum = document.querySelectorAll('choose-sum'),
choosePercent = document.querySelectorAll('choose-percent'),
yearValue = document.querySelectorAll('year-value'),
monthValue = document.querySelectorAll('month-value'),
dayValue = document.querySelectorAll('day-value');




let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();



let appData = {
    budjec: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [], //Свойства
    savings: true,
    chooseExspenses: function () { //Создаем новый метод (функцию)
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');

            if ((typeof (a)) === 'string' && (typeof (a)) != 'Null' && (typeof (b)) != 'Null' && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }

    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budjec / 30).toFixed();
        alert("Ежелневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save / 10 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 4; i++) {
            let a = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = a;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");   
       
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Что принесет дополнительный доход? (Перечислите через запятую)", "")
        } else{
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё ?"));
            appData.income.sort();
        }

        appData.income.forEach(function(itemmassive, i){
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
        
    },

};

for (let key in appData){  
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}






 