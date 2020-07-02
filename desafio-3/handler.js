'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.soma = async params => {
  let a = params.multiValueQueryStringParameters.a;
  let b = params.multiValueQueryStringParameters.b;
  console.log(a,b);
  // const a1 = parseFloat(params.a) || 0;
  // const b1 = parseFloat(params.b) || 0;

  const result = parseFloat(a) + parseFloat(b);

  console.log('log', { resultado: result });
  return {
    statusCode: 200,
    body: JSON.stringify({ resultado: result }, null, 2)
  };
};
