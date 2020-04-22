
window.main = function () {
    var input = {
        high: [],
        low: [],
        close: [],
        period: 14,
        signalPeriod: 3
    };


    for (var i = 20; i >= 0; --i) {
        input.high.push([ih][i].PriceMax);
        input.low.push([ih][i].PriceMin);
        input.close.push([ih][i].PClosing);
    }
    input.high.push((pmax));
    input.low.push((pmin));
    input.close.push((pc));

    var stoch = Stochastic.calculate(input);
    var k_under_20_index = -1;
    var k_upon_20_index = -1;
    for (var i = stoch.length - 1; i >= 0; --i) {
        if (k_under_20_index == -1 && stoch[i].k < 20)
            k_under_20_index = i;
        if (k_upon_20_index == -1 && stoch[i].k > 20)
            k_upon_20_index = i;
    }
    if (k_under_20_index > -1 && k_under_20_index > 5 && k_upon_20_index > k_under_20_index) {
        return true;
    }
    return false;
}