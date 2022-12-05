function loan() {
  var a = document.first.a.value.replace(/\s/g, '');
  var c = document.first.c.value;
  if (c < 1) {
    document.first.r1.value = 0;
    document.first.r2.value = 0;
    document.first.r3.value = 'Вы ввели некорректное значение, минимальный срок аренды 1 год!';
    document.first.r4.value = 0;
    document.first.r6.value = 0;
    document.first.r7.value = 0;
    document.first.r9.value = 0;
    return;
  }
  else if (c > 10) {
    document.first.r1.value = 0;
    document.first.r2.value = 0;
    document.first.r3.value = 'Вы ввели некорректное значение, максимальный срок аренды 10 лет!';
    document.first.r4.value = 0;
    document.first.r6.value = 0;
    document.first.r7.value = 0;
    document.first.r9.value = 0;
    return;
  }
  var p1 = a * 0.05;
  var p2 = a * 0.26;
  var p3 = (a * 0.72) / (c * 12) + ((a * 0.72) * 0.02) / 12;
  var p4 = (a * 0.26) + (a * 0.05);
  var p6 = a * 0.72;
  var p7 = ((a * 0.72) * 0.02) / 12;
  var p9 = (a * 0.72) / (c * 12);
  var prin1 = Math.round(p1 * 100) / 100;
  var prin2 = Math.round(p2 * 100) / 100;
  var prin3 = Math.round(p3 * 100) / 100;
  var prin4 = Math.round(p4 * 100) / 100;
  var prin6 = Math.round(p6 * 100) / 100;
  var prin7 = Math.round(p7 * 100) / 100;
  var prin9 = Math.round(p9 * 100) / 100;
  function numFormat(prin1) { return prin1.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin2) { return prin2.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin3) { return prin3.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin4) { return prin4.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin6) { return prin6.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin7) { return prin7.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  function numFormat(prin9) { return prin9.toFixed(0).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') }
  document.first.r1.value = numFormat(prin1);
  document.first.r2.value = numFormat(prin2);
  document.first.r3.value = numFormat(prin3);
  document.first.r4.value = numFormat(prin4);
  document.first.r6.value = numFormat(prin6);
  document.first.r7.value = numFormat(prin7);
  document.first.r9.value = numFormat(prin9);
}