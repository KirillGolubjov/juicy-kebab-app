import supabase from './supabase';

export async function getMenu() {
  const { data, error } = await supabase.from('kebabs').select('*');

  if (error) {
    console.error(error);
    throw new Error('Kebabs could not be loaded');
  }

  return data;
}

export async function getOrderById(id) {
  const { data, error } = await supabase
    .from('order')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Order could not be loaded');
  }

  if (!data) {
    throw new Error(`Order with id ${id} not found`);
  }
  return data;
}

export async function createOrder(newOrder) {
  try {
    const { data, error } = await supabase.from('order').insert([newOrder]).select('id')
    if (error) {
      console.error(error);
      throw new Error('Order could not be created');
    }
    return data;
  } catch (err) {
    throw Error('Failed creating your order');
  }
}

