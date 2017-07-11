		
			function message(){
				
				console.log("message");
			}
			
			message();
			
			
			
			var firstName = "Selvina";
			var lastName = "Fernandes";
			var fullName = firstName + lastName ;
			
			console.log(fullName);
			
			//Function round a random number and output if its even or odd
			function random(){
				
				return Math.round(Math.random() * 101);
			}
			
			
			var randomNumber = random();	
			
			if (randomNumber % 2 === 0){
				console.log(randomNumber + " "+ "The number is even");
				pyramid(randomNumber);
				
				
			}
			else{
				console.log(randomNumber + " " + "The number is odd");
			}
			
			
			//Function to create pyramid with random number
			
			function pyramid(randomNumber){
				
				for(var i = 0; i <= randomNumber; i++){
					var output = "";
					
					for(var j = 0; j < i; j++){
						output += "*";
					}
					console.log(output);	
				}	
			}
			
			//Function to change color of the element using getElement
			
			
			function changeColor(newColor){
				var newElement = document.getElementById("profile__para");
				newElement.style.color = newColor;
			}
			