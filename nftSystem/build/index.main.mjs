// Automatically generated with Reach 0.1.8 (85500c11)
/* eslint-disable */
export const _version = '0.1.8';
export const _versionHash = '0.1.8 (85500c11)';
export const _backendVersion = 10;

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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1]
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
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v56 = stdlib.protect(ctc0, interact.price, 'for Creator\'s interact field price');
  
  const txn1 = await (ctc.sendrecv({
    args: [v56],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:13:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:21:13:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [v61], secs: v63, time: v62, didSend: v32, from: v60 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:21:13:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v32, from: v60 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v69, time: v68, didSend: v41, from: v67 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
export async function Customer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Customer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Customer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v61], secs: v63, time: v62, didSend: v32, from: v60 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.payPrice(v61), {
    at: './index.rsh:25:26:application',
    fs: ['at ./index.rsh:24:18:application call to [unknown function] (defined at: ./index.rsh:24:22:function exp)'],
    msg: 'payPrice',
    who: 'Customer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v60, v61],
    evt_cnt: 0,
    funcNum: 1,
    lct: v62,
    onlyIf: true,
    out_tys: [],
    pay: [v61, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      
      const {data: [], secs: v69, time: v68, didSend: v41, from: v67 } = txn2;
      
      sim_r.txns.push({
        amt: v61,
        kind: 'to',
        tok: undefined
        });
      sim_r.txns.push({
        amt: v61,
        kind: 'from',
        to: v60,
        tok: undefined
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v69, time: v68, didSend: v41, from: v67 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BSACAAEmAgABACI1ADEYQQE0KGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoBFzYaAhc1BDYaAzUFSSMMQAB5IxJEIzQBEkQ0BEkiEkw0AhIRRClkSTUDgSBbNf+ABJqLkXSwNP9JQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRINP9JQQAPsbIII7IQNANXACCyB7MiSCKxsggjshAyCbIJMgqyB7MiSDEZgQUSREIAZEgiNAESRDQESSISTDQCEhFENAUXNf+ABILEYf40/xZQsIGgjQZJQQAdNABJIwg1AExLATgIEkQjSwE4EBJEMgpLATgHEkRIMQA0/xZQKUsBVwAoZ0gjNQEyBjUCMRkiEkRCAAAoNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISRCI1ASI1AkL/yw==`,
  appClear: `BQ==`,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
  unsupported: [],
  version: 9,
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
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
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
                "name": "v61",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
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
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
        "internalType": "struct T4",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161073c38038061073c83398101604081905261002291610199565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100d7565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100cf9260029290910190610100565b505050610272565b816100fc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010c90610237565b90600052602060002090601f01602090048101928261012e5760008555610174565b82601f1061014757805160ff1916838001178555610174565b82800160010185558215610174579182015b82811115610174578251825591602001919060010190610159565b50610180929150610184565b5090565b5b808211156101805760008155600101610185565b60008183036040808212156101ad57600080fd5b80518082016001600160401b0380821183831017156101dc57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101f557600080fd5b83519450602085019150848210818311171561022157634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061024b57607f821691505b6020821081141561026c57634e487b7160e01b600052602260045260246000fd5b50919050565b6104bb806102816000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461033f565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610227565b604051610064929190610357565b6100c860016000541460096102c4565b6100e2813515806100db57506001548235145b600a6102c4565b6000808055600280546100f4906103b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103b4565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103e9565b90507f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516101b6919061045b565b60405180910390a16101cf8160200151341460086102c4565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561020c573d6000803e3d6000fd5b5060008080556001819055610223906002906102e9565b5050565b60006060600054600280805461023c906103b4565b80601f0160208091040260200160405190810160405280929190818152602001828054610268906103b4565b80156102b55780601f1061028a576101008083540402835291602001916102b5565b820191906000526020600020905b81548152906001019060200180831161029857829003601f168201915b50505050509050915091509091565b816102235760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102f5906103b4565b6000825580601f10610305575050565b601f0160209004906000526020600020908101906103239190610326565b50565b5b8082111561033b5760008155600101610327565b5090565b60006040828403121561035157600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561038b5785810183015185820160600152820161036f565b8181111561039d576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103c857607f821691505b6020821081141561035157634e487b7160e01b600052602260045260246000fd5b6000604082840312156103fb57600080fd5b6040516040810181811067ffffffffffffffff8211171561042c57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461044657600080fd5b81526020928301519281019290925250919050565b8135815260408101602083013580151580821461047757600080fd5b80602085015250509291505056fea2646970667358221220a9a22f7c3c465bc26915d50b2e08d4343d5b2aa7482e8d03d651e478db8a1b3c64736f6c63430008090033`,
  BytecodeLen: 1852,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "Customer": Customer
  };
export const _APIs = {
  };
