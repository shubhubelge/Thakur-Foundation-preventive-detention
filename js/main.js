function changeGraphData(year){
  // console.log(year);
  // // console.log(typeof(year))
  // console.log($(this))
  // console.log($(this))year-detenues-2018
  $('.detenues .year').removeClass('active-year')
  $('.year-detenues-'+year).addClass('active-year')
  // $('.year-range .year').removeClass('active-year')
  // $(this).addClass('active-year')

  $('.year-data').removeClass('active')
  // console.log($(".year-data.year-"+year))
  $(".year-data.year-"+year).addClass('active')
  $('.data-year').text(year)

}
function changeBottomSection(bottomYear){
  console.log(bottomYear)
  $('.visulaization-left-bottom').removeClass('active')
  $(".bottom-visulization-left ."+bottomYear).addClass('active')
}

// var stateData = [{"year":2000, "data":{'active':false, 'name':}}]

function multiplyNode(node, count, deep) {
  for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
  }
}
multiplyNode(document.querySelector('#goondaOne'), 219, true);
multiplyNode(document.querySelector('#goondaThree'), 42, true);
multiplyNode(document.querySelector('#goondaSix'), 150, true);
multiplyNode(document.querySelector('#goondaEoy'), 215, true);

function changeDotData(year){
  console.log(year)
  console.log($(this))
  $('.preventive .year').removeClass('active-year')
  $('.year-preventive-'+year).addClass('active-year')
  $('.preventive-container').removeClass('active')
  $(".preventive-container.year-"+year).addClass('active')
}