var MetaManager = function(canLog){
  this.meta = {
    data: {
    },
  };

  this.defaultlb = 'default';

  if(canLog == true){
    this.trace = console.log;
  } else {
    this.trace = function(){};
  }

}

MetaManager.prototype.sync = function(){
  if (segadroid.data && segadroid.data.metadata){

    this.meta.data = segadroid.data.metadata['data'] || {};
  }
}

MetaManager.prototype.updateHighScore = function(newScore){
  if(newScore > this.meta.highscore) this.meta.highscore = newScore;
}

MetaManager.prototype.setData = function(dat){
  this.meta.data = dat;
}

MetaManager.prototype.dataExists = function(){
  if('metadata' in segadroid.data && 'data' in segadroid.data.metadata){
    return true;
  } else {
    return false;
  }
}

MetaManager.prototype.localHasOwnProperty = function(key) {
  this.meta.data.hasOwnProperty(key);
}

MetaManager.prototype.localSetItem = function(key, item){
  this.trace("SETTING ITEM");
  this.trace("KEY: ", key);
  this.trace("ITEM: ", item);

  this.meta.data[key] = item;

}

MetaManager.prototype.localGetItem = function(key){
  this.trace("GETTING ITEM");
  this.trace("KEY: ", key);
  this.trace(this.meta.data[key]);

  return this.meta.data[key];

}
MetaManager.prototype.localRemoveItem=function(key){

  delete this.meta.data[key];
}

oMetaManager = new MetaManager(false);

