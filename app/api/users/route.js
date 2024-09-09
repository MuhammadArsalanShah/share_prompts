// accessable at
// http://localhost:3000/api/users

export async function GET(request) {
  
  const users = [
    { id: 1, name: 'A'},
    { id: 2, name: 'B'},
    { id: 3, name: 'C'}
  ];

  return new Response(JSON.stringify(users));
}