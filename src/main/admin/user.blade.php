<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.83.1">
    <title>Admin</title>


    {{ Html::style('css/app.css') }}
    {{ Html::style('css/admin.css') }}

</head>

<body>
    <main>
        <div className="container-fluid overflow-hidden">
            <div className="row vh-100 overflow-auto">
                @include('admin.layout.sidebar')
                <div className="col d-flex flex-column h-sm-100 p-0">
                    @include('admin.layout.navbar')
                    @include('admin.layout.breadcrumb')
                    <div className="wrapper p-4 h-100">
                        <div className="card box-shadow">
                            <div className="card-header">
                                <div className="row">
                                    <div className="col-md-6">
                                        User List
                                    </div>
                                    <div className="col-md-6">
                                        <form action="/admin/menu/user/main" method="post">
                                            {{ csrf_field() }}
                                            <div className="input-group">
                                                <input type="text" className="form-control rounded-0" name="search" placeholder="Nama Lengkap, Email, ataupun Nama Lengkap" value="{{$data->search}}">
                                                <button className="btn btn-success text-white rounded-0" type="submit">Cari</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Nama Lengkap</th>
                                            <th scope="col">Alamat Email</th>
                                            <th scope="col">Nomor Ktp</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($data->user as $user)
                                        <tr>
                                            <th scope="row">{{$loop->index + 1}}</th>
                                            <td>{{$user->name}}</td>
                                            <td>{{$user->email}}</td>
                                            <td>{{$user->ktp_number}}</td>
                                            <td>
                                                <a data-bs-toggle="modal" data-bs-target="#modal_{{$loop->index}}" href="#"><i className="fas fa-edit text-success me-2 fs-5"></i></a>
                                                <i className="fas fa-trash-alt text-danger fs-5"></i>
                                            </td>
                                        </tr>
                                        <!-- Modal -->
                                        <div className="modal fade" id="modal_{{$loop->index}}" tabindex="-1" aria-labelledby="label_{{$loop->index}}" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="label_{{$loop->index}}">Informasi Detail Pengguna</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Nama Lengkap</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <span className="form-label m-0 col-md-8">{{$user->name}}</span>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Email</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <span className="form-label m-0 col-md-8">{{$user->email}}</span>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Nomor KTP</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <span className="form-label m-0 col-md-8">{{$user->ktp_number}}</span>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Tempat, Tanggal Lahir</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <span className="form-label m-0 col-md-8">{{$user->birth_city}}, {{\Carbon\Carbon::parse($user->birth_date)->translatedFormat('d F Y')}}</span>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Alamat</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <span className="form-label m-0 col-md-8">{{$user->address}}</span>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-md-3 d-flex align-items-center">
                                                                <span className="form-label m-0">Admin</span>
                                                            </div>
                                                            <span className="form-label m-0 col-md-1">:</span>
                                                            <div className="m-0 col-md-8">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" {{$user->admin ? 'checked' : ''}}>
                                                                    <label className="form-check-label" for="flexSwitchCheckChecked">Admin</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer">
                                <span>Total Data {{$data->jumlah}}</span>
                                <nav className="float-end">
                                    <ul className="pagination justify-content-end my-2">
                                        <li className="page-item {{($data->page == 1) ? 'disabled' : ''}}">
                                            @if($data->search == "")
                                            <a className="page-link" href="/admin/menu/all_user/{{$data->page-1}}" tabindex="-1" aria-disabled="true">Previous</a>
                                            @else
                                            <a className="page-link" href="/admin/menu/user/{{$data->search}}/{{$data->page-1}}" tabindex="-1" aria-disabled="true">Previous</a>
                                            @endif
                                        </li>
                                        <li className="page-item {{($data->page == 1) ? 'd-none' : ''}}">
                                            @if($data->search == "")
                                            <a className="page-link" href="/admin/menu/all_user/{{$data->page-1}}">{{$data->page-1}}</a>
                                            @else
                                            <a className="page-link" href="/admin/menu/user/{{$data->search}}/{{$data->page-1}}">{{$data->page-1}}</a>
                                            @endif
                                        </li>
                                        <li className="page-item active" aria-current="page">
                                            <a className="page-link" href="#">{{$data->page}}</a>
                                        </li>
                                        <li className="page-item {{(floor($data->jumlah / 20 + 1) == $data->page) ? 'd-none' : ''}}">
                                            @if($data->search == "")
                                            <a className="page-link" href="/admin/menu/all_user/{{$data->page+1}}">{{$data->page+1}}</a>
                                            @else
                                            <a className="page-link" href="/admin/menu/user/{{$data->search}}/{{$data->page+1}}">{{$data->page+1}}</a>
                                            @endif
                                        </li>
                                        <li className="page-item {{(floor($data->jumlah / 20 + 1) == $data->page) ? 'disabled' : ''}}">
                                            @if($data->search == "")
                                            <a className="page-link" href="/admin/menu/all_user/{{$data->page+1}}" tabindex="-1" aria-disabled="true">Next</a>
                                            @else
                                            <a className="page-link" href="/admin/menu/user/{{$data->search}}/{{$data->page+1}}">Next</a>
                                            @endif
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    @include('admin.layout.footer')
                </div>
            </div>
        </div>

    </main>
    {{ Html::script('js/app.js') }}
</body>

</html>