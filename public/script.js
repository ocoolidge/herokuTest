requestResponse('/endpoint', {noData:'noData'})

function requestResponse(url, data){
	console.log("in getGraphData()")
	$.ajax({
		type: "POST",
		data: JSON.stringify({clientPhrase:data}),
		url: url,
		processData: false,
		contentType: "application/json",
		cache: false,
		timeout: 600000,
		success: function (response) {
			console.log("we had success!")
			console.log(response)
            let bod = document.getElementsByTagName('body')[0]
            let txt = document.createTextNode(response)
            bod.appendChild(txt)
		},
		error:function(e){
			console.log(e)
			console.log("error occurred")
		}
	})
}