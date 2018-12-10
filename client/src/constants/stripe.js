const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_Bh7oWJyZu0hcI6Jinr3ixY4g';

export default STRIPE_PUBLISHABLE;
