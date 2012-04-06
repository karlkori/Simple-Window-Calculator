<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Orders_model extends Crud_model {

/**
* Название таблици базы данных с данными заказов.
*
* @var string
*/
public $table = 'orders';

/**
* Додать заказ
*
* @param array $data данные о заказе
* @return int id клиента
*/
    public function add($data)
{
     $this->db->insert($this->table, $data);
        return $this->db->insert_id();
}

    /**
* Получить список заказов
*
* @param int $limit
* @param int $offset
* @param string $sort_by поле для сортировки
* @param string $sort_order сортировать по возростанию или по спаданию
* @return array
*/
    public function get_list($limit, $offset, $sort_by, $sort_order)
    {
        $sort_order = ($sort_order == 'desc') ? 'desc' : 'asc';
        $sort_columns = array('id', 'name', 'contactname', 'tel', 'email', 'address', 'description');
        $sort_by = in_array($sort_by, $sort_columns) ? $sort_by : 'id';
 
        $this->db->order_by($sort_by, $sort_order)
            ->limit($limit, $offset);
        $query = $this->db->get($this->table);
        return $query->result_array();
    }

/**
* Поулчить количество заказов для пейджинга
*
* @return int
*/
    public function get_count()
    {
        return $this->db->count_all($this->table);
    }

/**
* Обновить данные заказа
*
* @param int $id
* @param [array $data информация о заказе
* @return ничего не возвращаем
*/
    public function update($id, $data)
    {
        $this->db->where('id', $id);
        $this->db->update($this->table, $data);
    }

/**
* Удалить заказ по его ID
* @param int $id
* @return ничего не возвращаем
*/
public function delete($id)
{
        if ($id != NULL)
        {
            $this->db->where('id', $id);
            $this->db->delete($this->table);
        }
}

/**
* Получить данные о заказе по его ID
*
* @param int $id
* @return array
*/
    public function get_by_id($id){
        $this->db->where('id', $id);
        $query = $this->db->get($this->table);
        return $query->row_array();
    }

}


/* End of file orders_model.php */
/* Location: ./application/models/orders_model.php */