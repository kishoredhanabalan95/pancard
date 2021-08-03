var request = new XMLHttpRequest();
request.open ('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function()
{
    var data = JSON.parse(this.response);
    var result1 = data.filter((element)=>element.region==="Asia");
    var result2 = data.filter((element)=>element.population<200000);
    var result3 = data.filter((element)=>
    {
        for (let i in element.currencies)
        {
            if (element.currencies[i].code==="USD")
            return true;
        }
    });
    const sum = data.reduce((accumulator,element)=>accumulator+element.population, 0);
    console.log (data);
    console.log(sum);
    console.log(result3);
    console.log(result1);
    console.log(result2);
}