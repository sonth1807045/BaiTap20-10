var celebraionNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
var showMore=document.getElementById("show-more");
var liCelerationName="";
for (var i = 0; i <celebraionNames.length ; i++) {
    liCelerationName+='<li>'+celebraionNames[i]+'</li>'
}
showMore.onclick =function(){
    showMore.parentElement.innerHTML=liCelerationName;
};
document.body.innerHTML = celebrationRose + celebrationContentP1 + liCelerationName + celebrationContentP2;erHTML = celebrationRose + celebrationContentP1 + liCelerationName + celebrationContentP2;rationRose + celebrationContentP1 + liCelerationName + celebrationContentP2;