module.exports = {
  replace: function(strOrObj, props) {
    var ret = (typeof strOrObj == 'string') ? strOrObj : JSON.stringify(strOrObj);

    if (!props)
      return ret;

    for (var key in props)
    {
      var regEx = regExDict[key] || (regExDict[key] = (typeof props[key] == 'string' ? new RegExp('\\$\\{' + key + '\\}?', 'g') : new RegExp('\\"?\\$\\{' + key + '\\}\\"?', 'g')));
      ret = ret.replace(regEx, props[key]);
    }

    return ret;
  };
};