document.addEventListener("DOMContentLoaded", function() {
  const sidebar1 = d3.select("#sb1");
  const sidebar2 = d3.select("#sb2");
  const toggleBtn1 = d3.select("#toggleBtn1");
  const toggleBtn2 = d3.select("#toggleBtn2");
  const elementsToToggle = d3.selectAll(".construct-container, .transparent-box-acc, .construct, .accident-container, .transparent-box-con, .accident, .position-container1, .pos1");
  const elementsToToggle2 = d3.selectAll(".congestion-container, .transparent-box-cng, .congestion, .position-container2, .pos2");
  elementsToToggle.classed("hidden", true);
  elementsToToggle2.classed("hidden", true);
  toggleBtn1.on("click", async()=> {
const accident_data = await fetch("http://140.113.208.116:5757/accident/a").then((e)=>e.json());
const construction_data=await fetch("http://140.113.208.116:5757/construction/a").then((e)=>e.json());
console.log(accident_data,construction_data);
      elementsToToggle.classed("hidden", true);
      toggleSidebar(sidebar1);
      hideSidebar(sidebar2);
      elementsToToggle.classed("hidden", false);
      elementsToToggle2.classed("hidden",true);
    });

    toggleBtn2.on("click", async()=> {
const accident_data = await fetch("http://140.113.208.116:5757/accident/b").then((e)=>e.json());
const construction_data=await fetch("http://140.113.208.116:5757/construction/b").then((e)=>e.json());
console.log(accident_data,construction_data);
      elementsToToggle2.classed("hidden", true);
      toggleSidebar(sidebar2);
      hideSidebar(sidebar1);
      elementsToToggle.classed("hidden", true);
      elementsToToggle2.classed("hidden",false);
    });
    function toggleSidebar(sidebar) {
      const currentRight = parseInt(sidebar.style("left"), 10);
      const newRight = currentRight === 0 ? -500 : 0;
      sidebar.style("left", newRight + "px");
    }
    function hideSidebar(sidebar) {
      sidebar.style("left", "-500px");
    }

});
