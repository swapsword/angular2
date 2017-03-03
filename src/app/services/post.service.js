"use strict";
require('rxjs/add/operator/map');
{
    var PostService = (function () {
        function PostService(http) {
            this.http = http;
            console.log('PostService Initialized..');
        }
        PostService.prototype.getPosts = function () {
            return this.http.get('https://jsonplaceholder.typicode.com/posts')
                .map(function (res) { return res.json(); });
        };
        return PostService;
    }());
    exports.PostService = PostService;
}
//# sourceMappingURL=post.service.js.map