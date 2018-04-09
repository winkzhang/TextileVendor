var root = 'http://wink.net.cn:5000/';
export default {
  api : {
    'login': root +'login',
    'ifnew': root + 'store/ifnew?name=',
    'signup': root + 'signup',
    'editinfo': root + 'store/editinfo',
    'getbasicinfo': root + 'store/basicinfo?name=',
    'showproduct': root + 'store/showproduct/detail?name=username&&productId=userid',
    'enterproduct': root + 'store/enterproduct/spec',
    'uploadpdf': root + 'store/enterproduct/pdf',
    'getcommodity': root + 'home/commodity',
    'gettotalinfo': root + 'store/totalinfo?name=',
    'deleteproduct': root + 'store/deleteproduct'
  }
}
