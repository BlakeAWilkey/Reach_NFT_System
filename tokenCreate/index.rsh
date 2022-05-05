'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
  });
  init();
  A.only(()=>{
   const s = 10;
   const d = 0;
   const am = 1;
  });
  A.publish(s,d,am);
  require(s>= 2*am);
  const tok = new Token({supply: s, decimals: d});
  commit();

  A.publish();
  transfer(am,tok).to(A);
  commit();
  A.pay([[am,tok]]);
  commit();
  A.publish();
  tok.burn();
  tok.destroy();
  commit();
  
  exit();
});
