// write your code here!
function getFrequencies(str){
	var sortedStr=Array.from(str).sort();
	var data=[];
	sortedStr.forEach((c)=>{
		var charIdx=data.findIndex(i=>i.character===c);
		if(charIdx>-1){
			data[charIdx].count++;
		}
		else{
			data.push({character:c, count:1})
		}
	})
	console.log(data);
	return data;
}
// getFrequencies("hello world");

var input=d3.select("input");


d3.select("form")
.on("submit",()=>{
	d3.event.preventDefault();
	var text=input.property("value");

var letters=d3.select("#letters")
	.selectAll(".letter")
	.data(getFrequencies(text), d=>d.character);

letters
	.classed("new", false)
	.exit()
	.remove()
	
letters
	.enter()
	.append("p")
		.classed("letter new",true)
	.merge(letters)
		.text(d=>d.character)
		.style("height",d=>d.count*20+"px")

console.log(letters)
d3.select("#phrase")
.text("Analysis of: "+text)

d3.select("#count")
.text("(New letters: "+letters.enter().nodes().length+")")

	input.property("value","");

});

d3.select("#reset")
.on("click",()=>{
	d3.event.preventDefault();
	var letters=d3.select("#letters")
	.selectAll(".letter")
	.remove()

d3.select("#phrase")
.text("")

d3.select("#count")
.text("")

})