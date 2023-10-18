document.addEventListener("DOMContentLoaded", function() {
  const sidebar1 = d3.select("#sb1");
  const sidebar2 = d3.select("#sb2");
  const toggleBtn1 = d3.select("#toggleBtn1");
  const toggleBtn2 = d3.select("#toggleBtn2");
  const elementsToToggle = d3.selectAll(".construct-container, .transparent-box-acc, .construct, .accident-container, .transparent-box-con, .accident, .position-container1, .pos1, .arrow, .flag");
  const elementsToToggle2 = d3.selectAll(".congestion-container, .transparent-box-cng, .congestion, .position-container2, .pos2, .arrow2, .flag");
  elementsToToggle.classed("hidden", true);
  elementsToToggle2.classed("hidden", true);
  toggleBtn1.on("click", ()=> {
      elementsToToggle.classed("hidden", true);
      toggleSidebar(sidebar1);
      hideSidebar(sidebar2);
      elementsToToggle2.classed("hidden",true);
      elementsToToggle.classed("hidden", false);
    });

    toggleBtn2.on("click", ()=> {
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
