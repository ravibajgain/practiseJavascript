var bunController = ( function() {
    var Expense = function(id, description, value){
        this.id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems:{
            exp : [],
            inc : []
        },
        totals : {
            exp : 0,
            inc : 0 
        }
    };

    return {
        addItem: function (type, des, val){
            var newItem;
        
            //create new ID
            if(data.allItems[type].length>0){
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            }else {
                ID = 0;
            }


        //create new item based on 'inc' or 'exp' type
          if (type === 'exp'){
            newItem = new Expense (ID, des, val);
              
          } else if (type === 'inc'){
            newItem = new Income (ID, des, val);

          }
        // push it into data structure
          data.allItems[type].push(newItem);
          return newItem;


        },

        testing: function(){
            console.log(data);
        }
    };
    

})();

//UI CONTROLLER
var UIController = (function (){

    var DOMstrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputBtn : '.add__btn'
    };
    
    return{
        getInput : function(){
            return {
                
             type: document.querySelector(DOMstrings.inputType).value,// will be either inc or exp
             description: document.querySelector(DOMstrings.inputDescription).value,
             value: document.querySelector(DOMstrings.inputValue).value

            };
        },
        getDOMstrings : function(){
            return DOMstrings;
        }
    };
    

})();

//GLOBAL APP CONTROLLER

var controller = (function (budgetCtrol, UIctrl) {
    var setupEventListners = function(){
    var DOM = UIctrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);   

    document.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            console.log('Enter key was pressed');
            ctrlAddItem();
        }
    });
   
    }
    var ctrlAddItem = function(){
        var input, newItem;
        //console.log('hello');
          //1.  get the filed input data
          input = UIctrl.getInput();
          
          //add the item to the budget controller
          newItem = budgetCtrol.addItem(input.type, input.description, input.value);

        //2. add the item to the budget controller
        //3. add the item to the UI
        //4. Calculate the budget
        //5. display the budget on the UI
    };
    return {
        init : function () {
            console.log('Appplication has started.');
            setupEventListners();            
        }
    };
})(bunController, UIController); 

controller.init();