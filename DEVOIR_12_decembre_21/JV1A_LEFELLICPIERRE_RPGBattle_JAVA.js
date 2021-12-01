pvmonstre1=document.getElementById("pvmonstre1")
pvperso1=document.getElementById("pvperso1")
imgmonstre1=document.getElementById("imgmonstre1")

imgmonstre1.onclick=function()
    {
    pvmonstre1.innerHTML=pvmonstre1.innerHTML-10;
    pvperso1.innerHTML=pvperso1.innerHTML-10
    }