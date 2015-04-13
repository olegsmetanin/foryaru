//chai & should don't work in ie6, use assert
//import "should";
//import "chai";
import assert from 'assert';

import Request from './../src/Request.js';
import Utils from './../src/Utils.js';
import Solver from './../src/Solver.js';

describe('AJAX', () => {
  it('local request using ~ new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP") is working fine', (done) => {
    Request.get('base/public/1.json')
      .then(jsonString => {
        assert.deepEqual(JSON.parse(jsonString), {
          "one": "two",
          "key": "value"
        });
        done();
      });
  });

  it('cors request using ~ new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP") is working fine except ie6-9', (done) => {
    Request.get('http://cors-test.appspot.com/test')
      .then(jsonString => {
        assert.deepEqual(JSON.parse(jsonString), {
          "status": "ok"
        });
        done();
      })
      .catch(err => {
        if (document.all && !window.XMLHttpRequest) {
          //ie6
          done();
        } else if (document.all && !document.querySelector) {
          //ie7
          done();
        } else if (document.all && !document.addEventListener) {
          //ie8
          done();
        } else if (document.all && !window.atob) {
          //ie9
          done();
        } else {
          done(err);
        }
      });
  });

});

describe('Debounce', () => {
  it('working with defined frequency', (done) => {
    var debouncedCounter = 0;
    let debouncedCounterFn = Utils.debounce(function() {
      debouncedCounter++;
    }, 2);

    var timer = setInterval(debouncedCounterFn, 100);
    setInterval(function() {
      clearInterval(timer);
      assert.equal(debouncedCounter, 3);
      done();
    }, 1500);

  });

  it('get right context', (done) => {

    let context = {
      qwe: 'asd'
    };

    function eventHandler(event) {
      assert.equal(event, context);
      done();
    }

    Utils.debounce(eventHandler)(context);

  });

});

describe('Find pair for sum', () => {
  it('is working properly for [10,-100,7, 50, -30, 50, 50, -30] and sum = 20', () => {
    assert.deepEqual(Solver.findPairsForSum([10, -100, 7, 50, -30, 50, 50, -30], 20), [
      [-30, 50],
      [-30, 50]
    ]);
  });

  it('is working properly for [10] and sum = 20', () => {
    assert.equal(Solver.findPairsForSum([10], 20).length, 0);
  });

});