
var dateFormat = require('dateformat');
var shortdate = require('shortdate');
var now = new Date();
var year = require('year');
var month = require('month');
var moment = require('moment');


function getSpecDay(start_date,index,day_of_week){
			var myDay = moment(start_date)
							.startOf('month')
							.day(day_of_week);
			if (myDay.date() > 7) myDay.add(7,'d');
			var month = myDay.month();
			var i = 0;
			while(month === myDay.month()){
				i++;
				if(i==index)
					break;
				
					myDay.add(7,'d');
			}
			return myDay;			
			
	}

function calculate(occurrence, every, start_date, index, day_of_week) {
	
		var resultArray = new Array();
		
		for(i=0; i<occurrence; i++){
			var nextDate = getSpecDay(start_date.setMonth(start_date.getMonth() + (i == 0 ? 0 : every)),index,day_of_week);
			resultArray.push(nextDate);
		}		
		
        return resultArray;
    }
	

	var birthday = new Date();
    console.log(calculate(10, 2, new Date(2016,9,12), 2, 3));
	