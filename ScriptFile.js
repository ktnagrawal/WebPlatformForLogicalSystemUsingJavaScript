
		var inventory = [
			{src: 'a',lbl: 'friend', tgt: 'b'},
			{src: 'a',lbl: 'friend', tgt: 'c'},
			{src: 'c',lbl: 'friend', tgt: 'd'},
			{src: 'd',lbl: 'friend', tgt: 'e'},
			{src: 'e',lbl: 'friend', tgt: 'f'},
			{src: 'c',lbl: 'age', tgt: '40'},
			{src: 'c',lbl: 'workfor', tgt: 'ensisa'},
			{src: 'c',lbl: 'live', tgt: 'mulhouse'},
			{src: 'ketan',lbl: 'friend', tgt: 'nivedita'}
		];
		function addFunction() {
		//inventory.push({src: 'f',lbl: 'friend', tgt: 'g'});
			var length = inventory.length;
			for(var i=0; i < length; i++)
			{
				inventory.push({src:inventory[i].tgt,lbl:inventory[i].lbl, tgt:inventory[i].src})
			}
		}
		function addFunction_data() {
			var value_data = document.getElementById('addData').value;
			var words = value_data.split(" ");
			inventory.push({src:words[0],lbl:words[1], tgt:words[2]});
			document.getElementById('demo_1').innerHTML = "Data inserted successfully".fontcolor("green");
		}
		function removeFunction() {
		//inventory.push({src: 'f',lbl: 'friend', tgt: 'g'});
			var value_remove = document.getElementById('removeData').value;
			var words = value_remove.split(" ");
			var length = inventory.length;
			for(var i=0; i < length; i++)
			{
				if(inventory[i].src == words[0] && inventory[i].lbl == words[1] && inventory[i].tgt == words[2])
				{
					inventory.splice(i, 1);
					document.getElementById('demo_2').innerHTML = "Data removed successfully".fontcolor("green");
					break;
				}
			}
		}
		function checkFunction(){
			addFunction();
			var value1 = document.getElementById('checkExist').value;
			var words = value1.split(" ");
			console.log(words[0]);
			for(var i = 0; i < inventory.length; i++){
				if(inventory[i].src == words[0] && inventory[i].lbl == words[1] && inventory[i].tgt == words[2])
				{
					document.getElementById('demo').innerHTML = "Data Exist".fontcolor("green");
					break;
				}
				document.getElementById('demo').innerHTML = "Data Not Exist".fontcolor("red");
			}
		}
		
		function get_value(receive_value,find_data)
		{
			var words=receive_value.split(" ");
			var str_value="";
			var str_value_src="",str_value_lbl="",str_value_tgt="";
			for(var i=0;i<inventory.length;i++){
				if(inventory[i].src == words[0] && inventory[i].lbl == words[1] && words[2] == "?")
				{
					if (str_value == "")
					{
						str_value=str_value + inventory[i].tgt;
					}
					else 
					{
						str_value=str_value + "," + inventory[i].tgt;
					}
				}
				else if (inventory[i].lbl == words[1] && inventory[i].tgt == words[2] && words[0] == "?")
				{
					if (str_value == "")
					{
						str_value=str_value + inventory[i].src;
					}
					else 
					{
						str_value=str_value + "," + inventory[i].src;
					}
				}
				else if (inventory[i].src == words[0] && inventory[i].tgt == words[2] && words[1] == "?")
				{
					if (str_value == "")
					{
						str_value=str_value + inventory[i].lbl;
					}
					else 
					{
						str_value=str_value + "," + inventory[i].lbl;
					}
				}
				else if (words[0] == "?" && inventory[i].lbl == words[1] && words[2] == "?")
				{
					if (str_value_src == "" && str_value_tgt == "")
					{
						str_value_src=str_value_src + inventory[i].src;
						str_value_tgt=str_value_tgt + inventory[i].tgt;
					}
					else 
					{
						str_value_src=str_value_src + "," + inventory[i].src;
						str_value_tgt=str_value_tgt + "," + inventory[i].tgt;
					}
					str_value = "Source : ".fontcolor("red") + str_value_src + "<br> Target : ".fontcolor("green") + str_value_tgt;
				}
				else if (words[0] == "?" && words[1] == "?" && inventory[i].tgt == words[2])
				{
					if (str_value_src == "" && str_value_lbl == "")
					{
						str_value_src=str_value_src + inventory[i].src;
						str_value_lbl=str_value_lbl + inventory[i].lbl;
					}
					else 
					{
						str_value_src=str_value_src + "," + inventory[i].src;
						str_value_lbl=str_value_lbl + "," + inventory[i].lbl;
					}
					str_value = "Source : ".fontcolor("red") + str_value_src + "<br> Relation :".fontcolor("green") + str_value_lbl;
				}
				else if (inventory[i].src == words[0] && inventory[i].lbl == words[1] && inventory[i].tgt == words[2])
				{
					if(str_value == "")
					{
						str_value = true;
					}
				}
			}
			if (find_data == "")
			{
				return str_value;
			}
			else
			{
				var str_value1="";
				var words=str_value.split(",");
				var words1=find_data.split(",");
				for(var i=0;i<words.length;i++)
				{
					for (var j=0;j<words1.length;j++)
					{
						if(words[i] == words1[j])
						{
							if (str_value1 == "")
							{
								str_value1=str_value1 + words[i];
							}
							else 
							{
								str_value1=str_value1 + "," + words[i];
							} 
						}
					}
				}
				return str_value1;
			}
		}
		function checkData() {
			var check_value=document.getElementById('checkExist').value;
			var words=check_value.split(" ");
			var str_value="";
			var length = words.length;
			var count_operator = 0;
			for (var k=0;k<length;k++) {
				if (words[k]=="&&")
				{
					count_operator = count_operator + 1;
				}
			}
			var length_operator = count_operator;
			var find_data="";
			
			for (var i=0;i<=length_operator;i++)
			{
				var value= length-(i+((i+1)*3));
				find_data = get_value(words[value]+" "+words[value+1]+" "+words[value+2],find_data)
				if(find_data == "")
				{
					break;
				}
				// a friend ? && ? friend c
				// length = 7 ; first 4 to 6 ; logic: length -(i+((i+1)*3))
				
			}
			str_value = find_data;
			
			
			if(str_value == "")
			{
				document.getElementById('demo').innerHTML = "Data Not Exist".fontcolor("red");
				
			}
			else
			{
				document.getElementById('demo').innerHTML = str_value;
			}
		}
	