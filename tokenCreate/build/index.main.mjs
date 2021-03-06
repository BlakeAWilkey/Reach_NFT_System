// Automatically generated with Reach 0.1.10 (c934aa69)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (c934aa69)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc5],
      2: [ctc0, ctc1, ctc2, ctc5],
      3: [ctc0, ctc2, ctc5]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc0, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v150 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v151 = [v150];
  const txn1 = await (ctc.sendrecv({
    args: [stdlib.checkedBigNumberify('./index.rsh:8:14:decimal', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('./index.rsh:9:14:decimal', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('./index.rsh:10:15:decimal', stdlib.UInt_max, '1')],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:12:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:12:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v158, v159, v160], secs: v162, time: v161, didSend: v28, from: v157 } = txn1;
      
      ;
      const v163 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:13:15:decimal', stdlib.UInt_max, '2'), v160);
      const v164 = stdlib.ge(v158, v163);
      ;
      const v165 = '                                ';
      const v166 = '        ';
      const v167 = '                                                                                                ';
      const v169 = stdlib.simTokenNew(sim_r, v165, v166, v167, v165, v158, v159, getSimTokCtr());
      const v170 = await txn1.getOutput('internal', 'v169', ctc1, v169);
      const v180 = v151[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
      const v182 = v180[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '1')];
      const v183 = v180[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '2')];
      const v184 = [v158, v182, v183];
      const v185 = stdlib.Array_set(v151, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v184);
      const v187 = v185[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
      const v188 = v187[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
      const v190 = v187[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '2')];
      const v191 = [v188, v158, v190];
      const v192 = stdlib.Array_set(v185, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v191);
      const v193 = v192[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
      const v194 = v193[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
      const v195 = v193[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '1')];
      const v197 = [v194, v195, false];
      const v198 = stdlib.Array_set(v192, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v197);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v158, v159, v160], secs: v162, time: v161, didSend: v28, from: v157 } = txn1;
  ;
  const v163 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:13:15:decimal', stdlib.UInt_max, '2'), v160);
  const v164 = stdlib.ge(v158, v163);
  stdlib.assert(v164, {
    at: './index.rsh:13:10:application',
    fs: [],
    msg: null,
    who: 'Alice'
    });
  const v165 = '                                ';
  const v166 = '        ';
  const v167 = '                                                                                                ';
  const v169 = undefined /* TokenNew */;
  const v170 = await txn1.getOutput('internal', 'v169', ctc1, v169);
  const v180 = v151[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
  const v182 = v180[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '1')];
  const v183 = v180[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '2')];
  const v184 = [v158, v182, v183];
  const v185 = stdlib.Array_set(v151, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v184);
  const v187 = v185[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
  const v188 = v187[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
  const v190 = v187[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '2')];
  const v191 = [v188, v158, v190];
  const v192 = stdlib.Array_set(v185, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v191);
  const v193 = v192[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
  const v194 = v193[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0')];
  const v195 = v193[stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '1')];
  const v197 = [v194, v195, false];
  const v198 = stdlib.Array_set(v192, stdlib.checkedBigNumberify('./index.rsh:14:24:application', stdlib.UInt_max, '0'), v197);
  const txn2 = await (ctc.sendrecv({
    args: [v157, v160, v170, v198],
    evt_cnt: 0,
    funcNum: 1,
    lct: v161,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:17:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v201, time: v200, didSend: v53, from: v199 } = txn2;
      
      ;
      const v202 = stdlib.addressEq(v157, v199);
      ;
      const v203 = v198[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0')];
      const v204 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0')];
      const v208 = stdlib.sub(v204, v160);
      const v211 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '1')];
      const v212 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '2')];
      const v213 = [v208, v211, v212];
      const v214 = stdlib.Array_set(v198, stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0'), v213);
      sim_r.txns.push({
        amt: v160,
        kind: 'from',
        to: v157,
        tok: v170
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v201, time: v200, didSend: v53, from: v199 } = txn2;
  ;
  const v202 = stdlib.addressEq(v157, v199);
  stdlib.assert(v202, {
    at: './index.rsh:17:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v203 = v198[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0')];
  const v204 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0')];
  const v208 = stdlib.sub(v204, v160);
  const v211 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '1')];
  const v212 = v203[stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '2')];
  const v213 = [v208, v211, v212];
  const v214 = stdlib.Array_set(v198, stdlib.checkedBigNumberify('./index.rsh:18:22:application', stdlib.UInt_max, '0'), v213);
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v157, v160, v170, v214],
    evt_cnt: 0,
    funcNum: 2,
    lct: v200,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0'), [[v160, v170]]],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v217, time: v216, didSend: v64, from: v215 } = txn3;
      
      ;
      const v218 = v214[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0')];
      const v219 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0')];
      const v220 = stdlib.add(v219, v160);
      const v223 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '1')];
      const v224 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '2')];
      const v225 = [v220, v223, v224];
      const v226 = stdlib.Array_set(v214, stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0'), v225);
      sim_r.txns.push({
        amt: v160,
        kind: 'to',
        tok: v170
        });
      const v227 = stdlib.addressEq(v157, v215);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v217, time: v216, didSend: v64, from: v215 } = txn3;
  ;
  const v218 = v214[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0')];
  const v219 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0')];
  const v220 = stdlib.add(v219, v160);
  const v223 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '1')];
  const v224 = v218[stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '2')];
  const v225 = [v220, v223, v224];
  const v226 = stdlib.Array_set(v214, stdlib.checkedBigNumberify('./index.rsh:20:5:dot', stdlib.UInt_max, '0'), v225);
  ;
  const v227 = stdlib.addressEq(v157, v215);
  stdlib.assert(v227, {
    at: './index.rsh:20:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v157, v170, v226],
    evt_cnt: 0,
    funcNum: 3,
    lct: v216,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v230, time: v229, didSend: v69, from: v228 } = txn4;
      
      ;
      const v231 = stdlib.addressEq(v157, v228);
      ;
      const v232 = v226[stdlib.checkedBigNumberify('./index.rsh:23:11:application', stdlib.UInt_max, '0')];
      const v233 = v232[stdlib.checkedBigNumberify('./index.rsh:23:11:application', stdlib.UInt_max, '0')];
      stdlib.simTokenBurn(sim_r, v170, v233);
      stdlib.simTokenDestroy(sim_r, v170);
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc1, ctc5],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v230, time: v229, didSend: v69, from: v228 } = txn4;
  ;
  const v231 = stdlib.addressEq(v157, v228);
  stdlib.assert(v231, {
    at: './index.rsh:22:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v232 = v226[stdlib.checkedBigNumberify('./index.rsh:23:11:application', stdlib.UInt_max, '0')];
  const v233 = v232[stdlib.checkedBigNumberify('./index.rsh:23:11:application', stdlib.UInt_max, '0')];
  undefined /* TokenBurn */;
  undefined /* TokenDestroy */;
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAJAAEDAgggKASgjQYmAgEAACI1ADEYQQK2KWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEAAuUkkDEAAPCQSRCQ0ARJENARJIhJMNAISEUQoZEk1AyEFWzX/gASnZcS0sDQDVwAgMQASRLEisgEkshA0/7Ihs0IB9kglNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQVbNf4hBls1/VcwETX8gARBsUBNsDT8VwARSTX7Ils0/ggWNPtXCAhQNPtXEAFQNfo0/jT9iAIRNP8xABJENP80/RZQNPpQKEsBVwA5Z0gkNQEyBjUCQgGbSSMMQACJSCM0ARJENARJIhJMNAISEUQoZEk1A0lKVwAgNf8hBVs1/iEGWzX9VzARNfyABJqLkXSwNP8xABJENPxXABFJNfsiWzT+CRY0+1cICFA0+1cQAVA1+rEisgE0/rISIQeyEDT/shQ0/bIRszT/NP4WUDT9FlA0+lAoSwFXAEFnSCU1ATIGNQJCAQxIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+gRBbNf2ABPdxE000/xZQNP4WUDT9FlCwIQiIAQ2BEa81/DT/JTT9Cw9EMgM1+yEIiAD3sSKyASSyEDT/siI0/rIjIQSvsiU0+7ImgWCvsic0+7IoMgqyKbO0PDX6gAgAAAAAAAAAqTT6FlCwNPo1+TT8VwARNfg0/xY0+FcICFA0+FcQAVBJNfdXABFJNfZXAAg0/xZQNPZXEAFQSTX1VwARSTX0VwAINPRXCAhQKFA18zEANP0WUDT5FlA081AoSwFXAEFnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQcSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 65,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v158",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v159",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v160",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v169",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002b6838038062002b688339810160408190526200002691620006d8565b60008055436003556200003862000450565b60408051338152835160208083019190915280850151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a180516000908190528151602090810182905282516040019190915281519082015152620000c134156007620003a3565b620000ec8260200151604001516002620000dc91906200079b565b60208401515110156008620003a3565b6040818101805160009081905260608401518190526080840180518290528051602090810183905290518401919091529051518251918201520160408051601f19818403018152908290526060830151516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051808303601f19018152828252858201515160208401529101604051602081830303815290604052856020015160000151866020015160200151604051620001d29062000564565b620001e3969594939291906200080d565b604051809103906000f08015801562000200573d6000803e3d6000fd5b506001600160a01b031660a0820181905260c082018190526040519081527f7e61140fdf1c048033063d2bd5c81f766a227062ae7c2fb44023d57ce81356919060200160405180910390a16020828101515160e08301805191909152828201805151830151825190930192909252815151604090810151825190151591015290519051620002929190600090620003cd565b6101008201818152905151610120830180519190915260208481015151825190910152815151604090810151825190151591015290519051620002d99190600090620003cd565b61014082018181529051516101608301805191909152815151602090810151825190910152805160006040909101819052915190516200031a9290620003cd565b6101808201526200032a62000572565b3381526020808401516040908101518284015260c08401516001600160a01b03168184015261018084015160608401526001600081905543905551620003739183910162000878565b6040516020818303038152906040526002908051906020019062000399929190620005ae565b505050506200094c565b81620003c95760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b620003d76200063d565b60005b60018110156200042d57848160018110620003f957620003f96200076f565b60200201518282600181106200041357620004136200076f565b6020020152806200042481620008f1565b915050620003da565b50818184600181106200044457620004446200076f565b60200201529392505050565b60408051610200810190915260006101a082018181526101c083018290526101e0830191909152815260208101620004876200063d565b815260408051602080820183526000808352818501929092528251808201845282815283850152825160608082018552838252818301849052818501849052808601919091526080850183905260a08501839052835190810184528281529081018290529182015260c082015260e001620005016200063d565b81526040805160608101825260008082526020828101829052928201529101908152602001620005306200063d565b815260408051606081018252600080825260208281018290529282015291019081526020016200055f6200063d565b905290565b6110878062001ae183390190565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016200055f6200063d565b828054620005bc906200090f565b90600052602060002090601f016020900481019282620005e057600085556200062b565b82601f10620005fb57805160ff19168380011785556200062b565b828001600101855582156200062b579182015b828111156200062b5782518255916020019190600101906200060e565b50620006399291506200068a565b5090565b60405180602001604052806001905b62000673604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200064c5790505090565b5b808211156200063957600081556001016200068b565b604051606081016001600160401b0381118282101715620006d257634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036080811215620006ec57600080fd5b604080519081016001600160401b03811182821017156200071d57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200073757600080fd5b62000741620006a1565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615620007b857620007b862000785565b500290565b6000815180845260005b81811015620007e557602081850181015186830182015201620007c7565b81811115620007f8576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200082260c0830189620007bd565b8281036020840152620008368189620007bd565b905082810360408401526200084c8188620007bd565b90508281036060840152620008628187620007bd565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151818401526040808501519092168284015260608085015160c08501939192919083860160005b6001811015620008e55782518051835285810151868401528401511515848301529184019190850190600101620008b3565b50505050505092915050565b600060001982141562000908576200090862000785565b5060010190565b600181811c908216806200092457607f821691505b602082108114156200094657634e487b7160e01b600052602260045260246000fd5b50919050565b611185806200095c6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806373b4522c146100965780637eea518c146100a957806383230757146100bc578063ab53f2c6146100d157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610d02565b6100f4565b61005d6100a4366004610d02565b61030d565b61005d6100b7366004610d02565b610476565b3480156100c857600080fd5b50600154610070565b3480156100dd57600080fd5b506100e6610664565b60405161007a929190610d4a565b610104600160005414600b610701565b61011e8135158061011757506001548235145b600c610701565b60008080556002805461013090610d84565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610d84565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610f48565b90506101cb610b5a565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516101fc929190610f64565b60405180910390a161021034156009610701565b8151610228906001600160a01b03163314600a610701565b60208201516060830151515161023e9190610fc8565b8151526060820180515160209081015183519091015280515160409081015183519015159101525181516102759190600090610727565b816020018190525061029482604001518360000151846020015161079b565b61029c610b8f565b82516001600160a01b039081168252602080850151818401526040808601519092168284015283810151606084015260026000554360015590516102e29183910161101d565b60405160208183030381529060405260029080519060200190610306929190610bc9565b5050505050565b61031d6003600054146014610701565b6103378135158061033057506001548235145b6015610701565b60008080556002805461034990610d84565b80601f016020809104026020016040519081016040528092919081815260200182805461037590610d84565b80156103c25780601f10610397576101008083540402835291602001916103c2565b820191906000526020600020905b8154815290600101906020018083116103a557829003601f168201915b50505050508060200190518101906103da9190611061565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6338360405161040d929190610f64565b60405180910390a161042134156012610701565b8051610439906001600160a01b031633146013610701565b60208101516040820151515161044f91906107b4565b61045c81602001516107c7565b6000808055600181905561047290600290610c4d565b5050565b6104866002600054146010610701565b6104a08135158061049957506001548235145b6011610701565b6000808055600280546104b290610d84565b80601f01602080910402602001604051908101604052809291908181526020018280546104de90610d84565b801561052b5780601f106105005761010080835404028352916020019161052b565b820191906000526020600020905b81548152906001019060200180831161050e57829003601f168201915b50505050508060200190518101906105439190610f48565b905061054d610b5a565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338460405161057e929190610f64565b60405180910390a16105923415600d610701565b6020820151606083015151516105a891906110b0565b8151526060820180515160209081015183519091015280515160409081015183519015159101525181516105df9190600090610727565b81602001819052506106046105fd33846040015185602001516107dc565b600e610701565b815161061c906001600160a01b03163314600f610701565b610624610c87565b82516001600160a01b039081168252604080850151909116602080840191909152838101518284015260036000554360015590516102e2918391016110c8565b60006060600054600280805461067990610d84565b80601f01602080910402602001604051908101604052809291908181526020018280546106a590610d84565b80156106f25780601f106106c7576101008083540402835291602001916106f2565b820191906000526020600020905b8154815290600101906020018083116106d557829003601f168201915b50505050509050915091509091565b816104725760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61072f610ca2565b60005b600181101561077b5784816001811061074d5761074d610f9c565b602002015182826001811061076457610764610f9c565b602002015280610773816110fb565b915050610732565b508181846001811061078f5761078f610f9c565b60200201529392505050565b6107a68383836107f4565b6107af57600080fd5b505050565b6107be82826108c5565b61047257600080fd5b6107d0816109a0565b6107d957600080fd5b50565b60006107ea83853085610a45565b90505b9392505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161085391611116565b60006040518083038185875af1925050503d8060008114610890576040519150601f19603f3d011682016040523d82523d6000602084013e610895565b606091505b50915091506108a682826002610b1f565b50808060200190518101906108bb9190611132565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b866040516024016108f191815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031990941693909317909252905161092f9190611116565b60006040518083038185875af1925050503d806000811461096c576040519150601f19603f3d011682016040523d82523d6000602084013e610971565b606091505b509150915061098282826003610b1f565b50808060200190518101906109979190611132565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b0386169183916109e791611116565b60006040518083038185875af1925050503d8060008114610a24576040519150601f19603f3d011682016040523d82523d6000602084013e610a29565b606091505b5091509150610a3a82826004610b1f565b506001949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391610aac91611116565b60006040518083038185875af1925050503d8060008114610ae9576040519150601f19603f3d011682016040523d82523d6000602084013e610aee565b606091505b5091509150610aff82826001610b1f565b5080806020019051810190610b149190611132565b979650505050505050565b60608315610b2e5750816107ed565b825115610b3e5782518084602001fd5b60405163100960cb60e01b81526004810183905260240161071e565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101610b8a610ca2565b905290565b604051806080016040528060006001600160a01b031681526020016000815260200160006001600160a01b03168152602001610b8a610ca2565b828054610bd590610d84565b90600052602060002090601f016020900481019282610bf75760008555610c3d565b82601f10610c1057805160ff1916838001178555610c3d565b82800160010185558215610c3d579182015b82811115610c3d578251825591602001919060010190610c22565b50610c49929150610ced565b5090565b508054610c5990610d84565b6000825580601f10610c69575050565b601f0160209004906000526020600020908101906107d99190610ced565b6040805160608101825260008082526020820152908101610b8a5b60405180602001604052806001905b610cd7604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081610cb15790505090565b5b80821115610c495760008155600101610cee565b600060408284031215610d1457600080fd5b50919050565b60005b83811015610d35578181015183820152602001610d1d565b83811115610d44576000848401525b50505050565b8281526040602082015260008251806040840152610d6f816060850160208701610d1a565b601f01601f1916919091016060019392505050565b600181811c90821680610d9857607f821691505b60208210811415610d1457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff81118282101715610df257610df2610db9565b60405290565b6040516060810167ffffffffffffffff81118282101715610df257610df2610db9565b80516001600160a01b0381168114610e3257600080fd5b919050565b80151581146107d957600080fd5b600082601f830112610e5657600080fd5b610e5e610dcf565b80606080850186811115610e7157600080fd5b855b81811015610ec257828189031215610e8b5760008081fd5b610e93610df8565b8151815260208083015181830152604080840151610eb081610e37565b90830152908652909401938201610e73565b50919695505050505050565b600060c08284031215610ee057600080fd5b6040516080810181811067ffffffffffffffff82111715610f0357610f03610db9565b604052905080610f1283610e1b565b815260208301516020820152610f2a60408401610e1b565b6040820152610f3c8460608501610e45565b60608201525092915050565b600060c08284031215610f5a57600080fd5b6107ed8383610ece565b6001600160a01b038316815281356020808301919091526060820190830135610f8c81610e37565b8015156040840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015610fda57610fda610fb2565b500390565b8060005b6001811015610d44578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101610fe3565b81516001600160a01b039081168252602080840151908301526040808401519091169082015260608083015160c083019161105a90840182610fdf565b5092915050565b600060a0828403121561107357600080fd5b61107b610df8565b61108483610e1b565b815261109260208401610e1b565b60208201526110a48460408501610e45565b60408201529392505050565b600082198211156110c3576110c3610fb2565b500190565b81516001600160a01b0390811682526020808401519091169082015260408083015160a083019161105a90840182610fdf565b600060001982141561110f5761110f610fb2565b5060010190565b60008251611128818460208701610d1a565b9190910192915050565b60006020828403121561114457600080fd5b81516107ed81610e3756fea26469706673582212203bf456cb5ba5b0607c6d6ec469a6b00fe4855546f245e753521485daf7d1d26364736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220c983e218fd1067adec5a9d609f624fd88896e9a40e9c876115ad061ca49f7f5764736f6c634300080c0033`,
  BytecodeLen: 11112,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:15:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:19:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:21:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:25:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice
  };
export const _APIs = {
  };
