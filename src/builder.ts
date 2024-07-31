class Request {
    public url: string;
    public method: string;
    public payload: object;
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class RequestBuilder {
    private request;
    constructor() {
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

const requestBuilder = new RequestBuilder();
requestBuilder.forUrl('http://www.google.com').useMethod('GET').payload({}).build();

export default RequestBuilder;