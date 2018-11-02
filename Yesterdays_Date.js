<html>
<head>
	<title>JS Yesterdays Date</title>
</head>
<body>
	<p id="yesterday"></p> 
</body>
<script>
	function formatDate(date) {
  	var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  	];

    var yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    var yesterday_date = yesterday.getDate();
    var month = yesterday;
    var monthIndex = month.getMonth();
	var year = yesterday.getFullYear();

	  return monthNames[monthIndex]+ ' '  + yesterday_date + ' ' + year;
	}

	var yesterday = (formatDate(new Date()));

	document.getElementById('yesterday').innerHTML = yesterday;

</script>
</html>
