function funtionNameHere()
{
	var svgContainer = d3.select("body").append("svg").attr("width", 300).attr("height", 300);
	var poly = svgContainer.append("polygon").attr("points", "10,14 20,125 100,10").style("fill", "red");
}