function Entry(name, age, gender)
{
    var entry = new Object();
    entry.username = name;
    entry.age = age;
    entry.gender = gender;
    entry.isAvail = function()
    {
        var regNum = /^\d+$/;
        if( gender && name && regNum.test(age))
            return true;
        return false;
    }
    return entry;
}
function delNode(node)
{
    if(node.parentNode)
        node.parentNode.removeChild(node);
}
function compareEntry(entry1,entry2)
{
    var numAge = entry1.age - entry2.age;
    return numAge==0?(entry1.name-entry1.name):numAge;
}