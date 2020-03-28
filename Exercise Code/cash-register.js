let currencyValue = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]]
                    .sort((a,b) => b[1] - a[1]);

function checkCashRegister(price, cash, cid) {
  var origCid = JSON.parse(JSON.stringify(cid));
  var cd = [];
  let mcf = parseFloat(cash-price).toFixed(2); //mcf = make change for
  //console.log(mcf)
  cid = orderCash(cid);

  for(let a=0; mcf > 0; a++)
  {
    //find highest currency (hc) that can subtract from mcf
    //get index of hc in cid
    //loop 
    //  see if there are any cid[hc] in cid
    //  if not, hc++
    //remove 1 hc from cid and from mcf; add to change due(cd)
    //console.log(mcf)// + " " + cid)
    let hc = currencyValue.find(e => mcf >= e[1]);
    let hcInCid = cid.findIndex(e => e[0] == hc[0])
    for(let b = hcInCid; b < currencyValue.length; b++){ //intend to break out of loop sooner than currencyValue.length
      if(cid[b][1] > 0)
        break;
      else
        hcInCid++;
    }

    if(hcInCid == cid.length && cid[hcInCid] == undefined)//no change left in drawer
      return {status: "INSUFFICIENT_FUNDS", change: []}

    cd = addToCd(cd, cid[hcInCid])
    cid[hcInCid][1] = parseFloat(cid[hcInCid][1] - currencyValue.find(e => e[0] == cid[hcInCid][0])[1]).toFixed(2);

    mcf = parseFloat(mcf - currencyValue.find(e => cid[hcInCid][0] == e[0])[1]).toFixed(2);

  }

  if(cid.every(e => e[1] == 0))
    return {status: "CLOSED", change: origCid};
  else
    return {status: "OPEN", change: cd};
}

function addToCd(cd, newCoin){
  let pos = cd.findIndex(e =>     newCoin[0] == e[0]    );
  if(pos > -1){
    cd[pos][1] += currencyValue.find(e => newCoin[0] == e[0])[1];
    cd[pos][1] = Math.round(cd[pos][1] * 100) / 100
  }
  else{
    let shallowCopy = currencyValue.find(e => newCoin[0] == e[0]);
    let deepCopy = JSON.parse(JSON.stringify(shallowCopy));
    cd.push(deepCopy);
  }

  return cd;
}

function orderCash(cid){
  var cashInDrawer = [];
  currencyValue.forEach(e => {
    let inArry = cid.find(f => f[0] == e[0]);
    if(!(inArry === undefined))
      cashInDrawer.push(inArry);
  })
  return cashInDrawer;
}



console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


