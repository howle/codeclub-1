export default {
fetch(request) {

if (request)
return new Response(`hello ${request.method} world.`);

}
}
