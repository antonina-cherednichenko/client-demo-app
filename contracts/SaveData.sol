pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/**
 * A basic contract for saving data
 */
contract SaveData is Ownable {

  struct Data {
    uint field1;
    uint field2;
  }

  mapping(address => Data[]) public allData;

  event LogDataSaved(
     address indexed user,
     uint indexed field1,
     uint indexed field2
  );

  function save(uint field1, uint field2)
    public
    returns (bool success)
  {
    allData[msg.sender].push(Data({field1: field1, field2: field2}));

    emit LogDataSaved(msg.sender, field1, field2);
    return true;
  }

  function getLatest()
    public
    view
    returns (uint field1, uint field2)
  {
    Data lastElement = allData[msg.sender][allData[msg.sender].length - 1];
    return (lastElement.field1, lastElement.field2);
  }

}
