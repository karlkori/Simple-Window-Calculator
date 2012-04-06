<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Orders extends CI_Controller {

/**
* Масив переменных для передачи в шаблон
* @var array
*/
public $data = array();

/**
* Подключаем необходимые для роботы модели ...
*/
public function __construct()
{
	parent::__construct();
	$this->load->model('crud_model');
	$this->load->model('orders_model');
	$this->data['title'] = 'Оконный калькулятор / Заказы';
	//$this->output->enable_profiler('TRUE');
}


/**
* Выводим список заказов
*
*/
public function display($sort_by='create_date', $sort_order='asc', $offset = 0)
{
	$limit = 10;

	$this->data['fields'] = array(
		'id' => 'Ид заказа',
		'create_date' => 'Дата создания',
		'price' => 'Сума'
	);

	$this->data['sort_by'] = $sort_by;
	$this->data['sort_order'] = $sort_order;
	$this->data['orders_count'] = $this->orders_model->get_count();
	$this->load->library('pagination');
	$config = array(
		'base_url' => site_url("orders/display/$sort_by/$sort_order"),
		'total_rows' => $this->data['orders_count'],
		'per_page' => $limit,
		'uri_segment' => 5,
		'full_tag_open' => '<div class="pagination"><ul>',
		'full_tag_close' => '</ul></div>',
		'first_link' => '<li>Первая</li>',
		'last_link' => '<li>Последняя</li>',
		'cur_tag_open' => '<li class="active"><a href="#">',
		'cur_tag_close' => '</a></li>',
		'num_tag_open' => '<li>',
		'num_tag_close' => '</li>',
		'prev_link' => '&lt;',
		'prev_tag_open' => '<li>',
		'prev_tag_close' => '</li>'
	);
	$this->pagination->initialize($config);

	$this->data['pagination'] = $this->pagination->create_links();
	$this->data['orders'] = $this->orders_model->get_list($limit, $offset, $sort_by, $sort_order);

	$this->layout->render('orders/list', $this->data);
}

/**
* Выводим и обрабатываем форму для редактирования данных клиента
*/
public function edit()
{
$id = $this->uri->segment(3, 0);
$id = (int)$id;

$this->form_validation->set_rules('name', 'Название', 'trim|required');

if ($this->form_validation->run() == TRUE)
{
$client = array(
'name' => $this->input->post('name'),
'contactname' => $this->input->post('contactname'),
'tel' => $this->input->post('tel'),
'email' => $this->input->post('email'),
'address' => $this->input->post('address'),
'description' => $this->input->post('description'),
);
$this->clients_model->update( $this->input->post('id'), $client );
redirect('clients');
}

$this->data['client'] = $this->clients_model->get_by_id($id);

if ($this->data['client'] == null)
{
$this->data['msg'] = 'Ничего не найденно.';
$this->layout->render('error', $this->data);
}
else
{
$this->data['form_action'] = 'clients/edit/' . $id;
$this->layout->render('clients/edit', $this->data);
}
}

/**
* Выводим и обрабатываем форму для нового клиента
*/
public function add()
{
$this->form_validation->set_rules('name', 'Название', 'trim|required');

if ($this->form_validation->run() == TRUE)
{
	$client = array(
		'name' => $this->input->post('name'),
		'contactname' => $this->input->post('contactname'),
		'tel' => $this->input->post('tel'),
		'email' => $this->input->post('email'),
		'address' => $this->input->post('address'),
		'description' => $this->input->post('description'),
	);
	$this->clients_model->add( $client );
	redirect('clients');
	}
	$this->data['form_action'] = 'orders/add/';
	$this->layout->render('orders/add', $this->data);
}


}

/* End of file clients.php */
/* Location: ./application/controllers/clients.php */