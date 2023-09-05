describe('User CRUD feature', () => {
  beforeEach(() => {
    cy.visit('https://petstore.swagger.io/');
  });

  it('should create a new user', () => {
    cy.request('POST', '/v2/user', {
      username: 'ramonb44',
      firstname: 'ramon',
      lastname: 'aguado',
      email: 'aguado.soft@gmail.com',
      password: '#NewPass',
      phone: '918285752'
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.body.code).to.equal(200);
      expect(response.body.type).to.equal('unknown');
      // expect(response.body.message).to.equal('EXCLUDE');
    });
  });

  it('should get user data by username', () => {
    cy.request('/v2/user/ramonb44').then(response => {
      expect(response.status).to.equal(200);
    });
  });

  it('should update user firstname and email', () => {
    cy.request('PUT', '/v2/user/ramonb44', {
      username: 'ramonb44',
      firstname: 'ramon',
      lastname: 'aguado',
      email: 'aguado.soft@gmail.com',
      password: '#NewPass',
      phone: '918285752'
    }).then(response => {
      expect(response.status).to.equal(200);
    });
  });

  it('should delete user by username', () => {
    cy.request('DELETE', '/v2/user/ramonb44').then(response => {
      expect(response.status).to.equal(200);
    });
  });
});
