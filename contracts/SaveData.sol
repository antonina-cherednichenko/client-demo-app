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

  mapping(address => Data[]) allData;

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

}
